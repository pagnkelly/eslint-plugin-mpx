/**
 * @fileoverview disallow unused variable definitions of v-for directives or scope attributes.
 * @author 薛定谔的猫<hh_2013@foxmail.com>
 */
'use strict'

const utils = require('../utils')

/**
 * @typedef {VVariable['kind']} VariableKind
 */

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Groups variables by directive kind.
 * @param {VElement} node The element node
 * @returns { { [kind in VariableKind]?: VVariable[] } } The variables of grouped by directive kind.
 */
function groupingVariables(node) {
  /** @type { { [kind in VariableKind]?: VVariable[] } } */
  const result = {}
  for (const variable of node.variables) {
    const vars = result[variable.kind] || (result[variable.kind] = [])
    vars.push(variable)
  }
  return result
}

/**
 * Checks if the given variable was defined by destructuring.
 * @param {VVariable} variable the given variable to check
 * @returns {boolean} `true` if the given variable was defined by destructuring.
 */
function isDestructuringVar(variable) {
  const node = variable.id
  /** @type {ASTNode | null} */
  let parent = node.parent
  while (parent) {
    if (
      parent.type === 'VForExpression' ||
      parent.type === 'VSlotScopeExpression'
    ) {
      return false
    }
    if (parent.type === 'Property' || parent.type === 'ArrayPattern') {
      return true
    }
    parent = parent.parent
  }
  return false
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'disallow unused variable definitions of v-for directives or scope attributes',
      categories: ['essential'],
      url: 'https://eslint.vuejs.org/rules/no-unused-vars.html'
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          ignorePattern: {
            type: 'string'
          }
        },
        additionalProperties: false
      }
    ]
  },
  /** @param {RuleContext} context */
  create(context) {
    const option = context.options[0] || {}
    const ignorePattern = option.ignorePattern
    /** @type {RegExp | null} */
    let ignoreRegEx = null
    if (ignorePattern) {
      ignoreRegEx = new RegExp(ignorePattern, 'u')
    }
    return utils.defineTemplateBodyVisitor(context, {
      /**
       * @param {VElement} node
       */
      VElement(node) {
        const vars = groupingVariables(node)
        for (const variables of Object.values(vars)) {
          if (!variables) {
            continue
          }
          let hasAfterUsed = false

          for (let i = variables.length - 1; i >= 0; i--) {
            const variable = variables[i]

            if (variable.references.length) {
              hasAfterUsed = true
              continue
            }

            if (ignoreRegEx != null && ignoreRegEx.test(variable.id.name)) {
              continue
            }

            if (hasAfterUsed && !isDestructuringVar(variable)) {
              // If a variable after the variable is used, it will be skipped.
              continue
            }

            context.report({
              node: variable.id,
              loc: variable.id.loc,
              message: `'{{name}}' is defined but never used.`,
              data: {
                name: variable.id.name
              },
              suggest:
                ignorePattern === '^_'
                  ? [
                      {
                        desc: `Replace the ${variable.id.name} with _${variable.id.name}`,
                        fix(fixer) {
                          return fixer.replaceText(
                            variable.id,
                            `_${variable.id.name}`
                          )
                        }
                      }
                    ]
                  : []
            })
          }
        }
      }
    })
  }
}
