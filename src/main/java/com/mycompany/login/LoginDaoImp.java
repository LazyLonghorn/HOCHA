package com.mycompany.login;

import org.apache.ibatis.session.SqlSession;

import com.mycompany.dto.MemberDTO;

public class LoginDaoImp implements LoginDAO{
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public MemberDTO loginPro(MemberDTO member) {
		return sqlSession.selectOne("member.loginPro",member);
	}
}
