/* query Selector vs querySelectorAll
 querSelector 는 입력받는 클래스를 가지고 있는 아이들 중 가장 상위에 있는 아이
querySelectorAll 은 입력받은 클래스를 가지고 있는 모든 아이들
그렇기 때문에 querySelector는 주로 id 값
주의:
# = class Name
. = id Name 
*/

h1 = document.querySelector('#my-list')
h1.innertext = '안녕하세요'
