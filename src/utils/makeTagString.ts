export const makeTagString = (input: string[]) => {
  if (input.length === 0) return 'noTag';
  let output = input.join('&');
  return output;
};