const requireAll = requireContent => requireContent.keys().map(requireContent)

const svgs = require.context('./svg', false, /\.svg$/)

requireAll(svgs)