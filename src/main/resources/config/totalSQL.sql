CREATE table hocha_member(
	member_num NUMBER,
	member_id varchar2(1000),
	member_passwd varchar2(1000)
);

create sequence hocha_member_seq
start with 1
increment by 1
nocache
nocycle;


DROP TABLE hocha_member
DROP SEQUENCE hocha_member_seq
INSERT INTO HOCHA_MEMBER VALUES(hocha_member_seq.nextval, 'abcd12','aaaaaaa1!');