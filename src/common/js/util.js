import store from '@/store/index';

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
}

export function getImageUrl({
  appId = '', platform = '', languageCode = '', type = '', subType = '', partCode = '', version, fileName = '',
}) {
  const { imgPrefix } = store.getters;
  if (!appId) return '';
  if (type === 'ad') {
    return `${imgPrefix}/${appId}/${platform}/${languageCode}/adc/${subType}/${partCode}/${version}/${fileName}`;
  }
  return `${imgPrefix}/${appId}/${platform}/${languageCode}/${type}/${partCode}/${version}/${fileName}`;
}

export function getOptionalQueryParams(data) {
  const filterParams = {};
  Object.keys(data).forEach((key) => {
    if (data[key] !== '' && data[key] !== 'all') {
      filterParams[key] = data[key];
    }
  });
  return filterParams;
}

export function test() {}
