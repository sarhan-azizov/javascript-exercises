var messages = [{id: 1},{id: 2}, {id: 1},{id: 1}, {id: 2}, {id: 3}] 

function findUniqueDuplicates(arr, key = 'id') {
  const info = {
  	uniq: {},
  	dubl: {},
  	res: []
  };
  
  arr.forEach((item) => {
  	const property = item[key];
    if (info.uniq[property] && !info.dubl[property]) {
		info.dubl[property] = item;
		info.res.push(item);
    } else if (!info.uniq[property]) {
      info.uniq[property] = true;
    }
  });

  return info.res;
}

findUniqueDuplicates(messages2);
