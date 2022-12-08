import React from 'react';
import { countryCodes } from '../data/countryCodes';
import { FilterItemLocation } from '../components/common/Elements/Elements';

export const filtersRange = ['1-20', '21-40', '41-60', '61-80', '81-100'];

export const getValueByPercent = (value, percent) => {
  return value * (percent / 100);
};

// export const trimZeros = numStr => {       // temporarily not used
//   const splittedNum = numStr.split('.');
//   if (!splittedNum[1]) {
//     return numStr;
//   }

//   const trimmed = splittedNum[1].replace(/0*$/, '');
//   if (trimmed.length === 0) {
//     return splittedNum[0];
//   }

//   return `${splittedNum[0]}.${trimmed}`;
// };

export const upFirstLetter = word => word.replace(/^\w/, m => m.toUpperCase());

export const underlineToSpace = str => (str ? str.replaceAll('_', ' ') : str);

// export const convertToUppercase = (str) =>       // temporarily not used
//   str.toUpperCase().replace(/\s/g, "_");

export const isData = data => {
  return data && data !== '-';
};

export const getFullName = (name, surname) => {
  if (isData(name) && isData(surname)) {
    return `${name} ${surname}`;
  }
  if (isData(name)) {
    return name;
  }
  if (isData(surname)) {
    return surname;
  }
  return '-';
};

export const getInitials = (name, surname) => {
  if (isData(name) && isData(surname)) {
    return `${name[0].toUpperCase()}${surname[0].toUpperCase()}`;
  }
  if (isData(name)) {
    return name[0].toUpperCase();
  }
  if (isData(surname)) {
    return surname[0].toUpperCase();
  }
  return '-';
};

export const getInitialsFull = name => {
  if (name) {
    return name
      .split(' ')
      .map(x => x.charAt(0))
      .join('')
      .substr(0, 2)
      .toUpperCase();
  }
  return '-';
};

export const moneyFormater = amount => {
  if (amount < 0) amount *= -1;
  if (amount < 100) {
    return `$${amount}`;
  }
  if (amount >= 100 && amount < 1000000) {
    return `$${Math.round((amount / 1000 + Number.EPSILON) * 100) / 100}k`;
  }
  if (amount >= 1000000 && amount < 1000000000) {
    return `$${Math.round((amount / 1000000 + Number.EPSILON) * 100) / 100}m`;
  }
  if (amount >= 1000000000) {
    return `$${
      Math.round((amount / 1000000000 + Number.EPSILON) * 100) / 100
    }b`;
  }
  return amount;
};

export const moneyFormaterFull = (amount, fraction = 0) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fraction
  }).format(amount);
};

export const textToDateMY = text => {
  if (text) {
    const options = { month: 'short', year: 'numeric' };
    const date = new Date(text);
    const newViewDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return newViewDate;
  } else return '';
};

export const textToDateM = (text, type = 's') => {
  if (text) {
    const options = { month: 'short' };
    if (type === 'l') options.month = 'long';
    const date = new Date(text);
    const newViewDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return newViewDate;
  }
  return '';
};

export const textToDate = text => {
  if (text) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(text);
    const newViewDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return newViewDate;
  }
  return '';
};

export const textToDateDMY = (start, end) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const dateStart = start ? new Date(start) : null;
  const dateEnd = end ? new Date(end) : null;
  const newViewDateStart = dateStart
    ? new Intl.DateTimeFormat('en-GB', options).format(dateStart)
    : '';
  const newViewDateEnd = dateEnd
    ? new Intl.DateTimeFormat('en-GB', options).format(dateEnd)
    : '';
  return `${newViewDateStart} - ${newViewDateEnd}`;
};

export const textToTime = text => {
  const options = { hour: 'numeric', minute: 'numeric' };
  const date = new Date(text);
  const newViewTime = new Intl.DateTimeFormat('en-US', options).format(date);
  return newViewTime;
};

export const numberFormat = number =>
  new Intl.NumberFormat('en-US').format(number);

export const calcPercent = (curValue, sumValue, round = 0) => {
  if (typeof curValue !== 'number' || typeof sumValue !== 'number') {
    return '';
  }
  const value = +((curValue / sumValue) * 100).toFixed(round);
  return value;
};

export const createFilterCountry = (arrFrom = [], arrTo) => {
  arrFrom.forEach(item => {
    if (item && item !== 'null') {
      arrTo.push({
        value: item,
        label: <FilterItemLocation item={item} />,
        findName: `${
          countryCodes.find(({ code }) => code === item).name
        } ${item}`,
        fullName: countryCodes.find(({ code }) => code === item).name
      });
    }
  });

  arrTo.sort((a, b) => {
    if (a.findName > b.findName) {
      return 1;
    }
    if (a.findName < b.findName) {
      return -1;
    }
    return 0;
  });
};

export const createFilterCountryWithStatus = (arrFrom = [], arrTo) => {
  arrFrom.forEach(item => {
    if (item.val && item.val !== 'null') {
      arrTo.push({
        value: item.val,
        label: <FilterItemLocation item={item.val} />,
        findName: `${countryCodes.find(({ code }) => code === item.val).name} ${
          item.val
        }`,
        fullName: countryCodes.find(({ code }) => code === item.val).name,
        status: item.status
      });
    }
  });

  arrTo.sort((a, b) => {
    if (a.findName > b.findName) {
      return 1;
    }
    if (a.findName < b.findName) {
      return -1;
    }
    return 0;
  });
};

export const createFilterSize = (arrFrom = [], arrTo) => {
  arrFrom.map(item => {
    if (item !== 'null') {
      arrTo.push({
        value: item,
        label: companySizeFormater(item)
      });
    }
    return '';
  });
};

export const companySizeFormater = size => {
  if (size === 'smb' || size === 'SMB') {
    return 'Small';
  }
  return size;
};

export const getQuarter = date => {
  return Math.floor((date.getMonth() + 3) / 3);
};

export const parsQueryForSave = query => {
  if (query) {
    if (typeof query === 'object') {
      return query.map(item =>
        item.split('&').join('%26').split('+').join('%2B')
      );
    } else {
      return query.split('&').join('%26').split('+').join('%2B');
    }
  } else return '';
};

export const healthStyle = (health, classes) => {
  switch (health) {
    case 'Health': {
      return classes.healthGreen;
    }
    case 'Need Attention': {
      return classes.healthYellow;
    }
    case 'In Risk': {
      return classes.healthRed;
    }
    default: {
      return '';
    }
  }
};

export const protocolsColor = {
  https: '#ed793b',
  http: '#5872de',
  ssh: '#4faf8d',
  rdp: '#dd6084',
  vnc: '#f3c91f'
};

export const cutTextforToltip = (name, length) => {
  if (name.length > length) {
    return `${name.slice(0, length)}...`;
  }
  return name;
};

export const recordType = ({ partnerType, customerType }) => {
  if (partnerType === '-') return customerType;
  else return `${partnerType} (${customerType})`;
};

export const removeSpaces = (str, mode) => {
  const string =
    mode === 'extra'
      ? str.replace(/\s+/g, ' ').replace(/^\s/, '').replace(/\s$/, '')
      : str.replaceAll(' ', '');
  return string;
};

export const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
};

export const delProperties = (obj, names = []) => {
  const objForPars = { ...obj };
  names.forEach(name => {
    delete objForPars[name];
  });

  return objForPars;
};

export const replaceHistory = (
  filter,
  setEnabledRequest,
  history,
  mode,
  forHistory
) => {
  if (mode === 'validation') {
    setEnabledRequest(false);
  }
  const query = `filter=${JSON.stringify(forHistory ? forHistory : filter)}`
    .split('+')
    .join('%2B')
    .split('&')
    .join('%26');

  if (mode === 'replace' || mode === 'validation') {
    history.replace(`${history.location.pathname}?${query}`);
  } else {
    history.push(`${history.location.pathname}?${query}`);
  }
};

export const moveIndex = (input, from, to) => {
  let numberOfDeletedElm = 1;
  const elm = input.splice(from, numberOfDeletedElm)[0];
  numberOfDeletedElm = 0;
  return input.splice(to, numberOfDeletedElm, elm);
};

export const paddingForMenuSettings = (tableConf, tableRef) => {
  const heigthOptionInList = 32;
  const tolerance = 24;
  const tableHeight = tableRef.current
    ? tableRef.current.offsetHeight
    : undefined;
  const menuHeigth = tableConf.length * heigthOptionInList - tolerance;
  if (menuHeigth > tableHeight) {
    return {
      paddingBottom: `${menuHeigth - tableHeight}px`
    };
  }
};

export const checkingForExistenceOfOptions = (filter, setFilter, body) => {
  const keysFilter = Object.keys(body);
  let newFilterList = { ...filter };
  keysFilter.forEach(key => {
    if (newFilterList[key]) {
      newFilterList[key] = newFilterList[key].filter(item =>
        body[key].find(val => val === item)
      );
    }
  });
  if (JSON.stringify(newFilterList) !== JSON.stringify(filter)) {
    setFilter(newFilterList);
    return newFilterList;
  }
  return false;
};

export const changeIconDivice = deviceType => {
  let iconName = '';
  switch (deviceType) {
    case 'Windows':
      iconName = 'windows';
      break;
    case 'IOS':
    case 'Mac':
      iconName = 'ios';
      break;
    case 'Linux':
      iconName = 'linux';
      break;
    case 'Android':
      iconName = 'android';
      break;
    default:
      break;
  }
  return iconName;
};
