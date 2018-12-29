package com.mycompany.memberInfo;

import org.mybatis.spring.SqlSessionTemplate;

import com.mycompany.dto.MemberDTO;

public class MemberInfoDaoImp implements MemberInfoDAO{
	private SqlSessionTemplate sqlSession;

	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}  
	  
	@Override
	public MemberDTO searchUser(String memberName) {
		// TODO Auto-generated method stub	
		return sqlSession.selectOne("member.searchUser", memberName);
	}
	
}
