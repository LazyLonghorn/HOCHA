package com.mycompany.memberInfo;

import com.mycompany.dto.MemberDTO;

public class MemberInfoServiceImp implements MemberInfoService{
	private MemberInfoDAO dao;
	public void setDao(MemberInfoDAO dao) {
		this.dao = dao;
	}

	@Override
	public MemberDTO searchUser(String memberName) {
		// TODO Auto-generated method stub
		return dao.searchUser(memberName);
	}
}
