function longest(s1, s2) {
  var unique1 = [];
  var unique2 = [];

  for (i = 0; i < s1.length; i++) {
    if (!unique1.includes(s1[i]))
      unique1.push(s1[i]);
  };

  for (i = 0; i < s2.length; i++) {
    if (!unique2.includes(s2[i]))
      unique2.push(s2[i]);
  };

  final1 = unique1.sort().join('');
  final2 = unique2.sort().join('');

  if (unique1.length > unique2.length)
    return unique1;
  else
    return unique2;
}