module.exports = {
  printWidth: 80, // 코드 한줄의 개수
  tabWidth: 2, // 들여쓰기 너비 수
  useTabs: false, // 탭 사용 여부 (미사용 시 스페이스바로 간격조정해야함)
  semi: true, // 뒤에 세미콜론 여부
  /**
   * @template: bracketSpacing: <'always'| 'avoid'>
   * 화살표 함수가 하나의 매개변수를 받을 때 괄호 사용여부
   * always : 괄호 사용
   * avoid : 괄호 제거(default)
   */
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  bracketSameLine: true, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  bracketSpacing: true, // 개체 리터럴에서 대괄호 사이 공백 여부
  singleQuote: true, // 홑따옴표 여부
  trailingComma: 'all', // 후행쉼표
};
