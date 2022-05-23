import slug from 'url-slug'

const getHierarchicalItems = (
  data = [],
  { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {},
) => {
  const tree = []
  const childrenOf = {}
  data.forEach((item) => {
    const newItem = { ...item }
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}

export { getHierarchicalItems }

export const idxModelGenerator = (name: string) => ({
  id: slug(name),
  name,
})
