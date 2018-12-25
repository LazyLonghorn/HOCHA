package com.mycompany.login;

import org.apache.ibatis.session.SqlSession;

import com.mycompany.dto.MemberDTO;

public class LoginDaoImp implements LoginDAO{
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public MemberDTO findUser(MemberDTO member) {
		return sqlSession.selectOne("member.findUser",member);
	}
	
	@Override
	public void joinPro(MemberDTO member) {
		// TODO Auto-generated method stub
		sqlSession.insert("member.join",member);
	}
}
