import { getField, updateField } from 'vuex-map-fields'
export default function baseStore(module: any) {
  module.namespaced = true
  module.getters.getField = getField
  module.mutations.updateField = updateField
  return module
}
