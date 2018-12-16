package com.mycompany.login;

import com.mycompany.dto.MemberDTO;

public class LoginServiceImp implements LoginService{
	private LoginDAO dao;
	public void setDao(LoginDAO dao) {
		this.dao = dao;
	}

	@Override
	public int loginPro(MemberDTO member) {
		MemberDTO findUser = dao.loginPro(member);
		System.out.println("Find User Id : " + findUser.getMemberId());
		System.out.println("Find User Passwd : " + findUser.getMemberPasswd());
		
		return 0;
	}
}
