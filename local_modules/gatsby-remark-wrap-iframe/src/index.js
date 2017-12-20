const visit = require(`unist-util-visit`)
const cheerio = require(`cheerio`)
const Promise = require(`bluebird`)
const _ = require(`lodash`)

module.exports = ({ markdownAST }, pluginOptions = {}) =>
  new Promise(resolve => {
    const defaults = {
      className: `gatsby-iframe-wrapper`,
    }
    const options = _.defaults(pluginOptions, defaults)
    visit(markdownAST, `html`, node => {
      const $ = cheerio.load(node.value)
      const iframe = $(`iframe, object`)
      if (iframe.length) {
          const newIframe = $(`body`).html() // fix for cheerio v1

          // TODO add youtube preview image as background-image.

          const rawHTML = `
          <div class="${options.className}">
            ${newIframe}
          </div>
          `
          
          node.data = {
            hChildren: [{ type: `raw`, value: rawHTML }],
          }
          // Set type to unknown so mdast-util-to-hast will treat this node as a
          // div not an iframe — it gets quite confused otherwise.
          node.type = `unknown`

          // Also apparently, for html node types, you have to delete the value
          // in order for mdast-util-to-hast to use hChildren. If even if
          // you change the node type to unknown...
          delete node.value
        
      }
    })

    return resolve(markdownAST)
  })
