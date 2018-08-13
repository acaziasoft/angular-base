export class LocalStorageUtils {

  static saveAccessToken(accessToken) {
    LocalStorageUtils.saveValue('access_token', accessToken);
  }
  static saveExpiresIn(expiresIn) {
    LocalStorageUtils.saveValue('expires_in', expiresIn);
  }
  static saveRefreshToken(refreshToken) {
    LocalStorageUtils.saveValue('refresh_token', refreshToken);
  }
  static isExistAccessToken() {
    return localStorage.getItem('access_token');
  }
  static removeAccessToken() {
    localStorage.removeItem('access_token');
  }
  static removeExpiresIn() {
    localStorage.removeItem('expires_in');
  }
  static removeRefreshToken() {
    localStorage.removeItem('refresh_token');
  }

  static saveValue(key, value) {
    if (!value) {
      return;
    }
    localStorage.setItem(key, value);
  }
}

