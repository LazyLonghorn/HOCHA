  
  # member_num number
  # member_grade
  # member_id
  # member_passwd
  # member_name
  # member_nick
  # member_pfimg


CREATE table hocha_member(
	member_num NUMBER,
	member_grade NUMBER,
	member_id varchar2(1000),
	member_passwd varchar2(1000),
	member_name varchar2(300),
	member_nick varchar2(1000),
	member_pfimg varchar2(2000)
);

create sequence hocha_member_seq
start with 1
increment by 1
nocache
nocycle;

SELECT * FROM hocha_member
DROP TABLE hocha_member
DROP SEQUENCE hocha_member_seq
INSERT INTO HOCHA_MEMBER VALUES(hocha_member_seq.nextval, 0, 'abcd12@naver.com','aaaaaaa1!','a','홍길동','default.jpg');