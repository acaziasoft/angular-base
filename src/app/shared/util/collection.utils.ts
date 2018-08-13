export default class CollectionUtils {

  static isEmpty(collection) {
    return (!collection || collection.length === 0);
  }
  static isNotEmpty(collection) {
    return !CollectionUtils.isEmpty(collection);
  }
}
