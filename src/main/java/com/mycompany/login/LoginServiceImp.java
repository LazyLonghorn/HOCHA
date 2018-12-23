package com.mycompany.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.mycompany.dto.MemberDTO;

public class LoginServiceImp implements LoginService{
	private LoginDAO dao;
	public void setDao(LoginDAO dao) {
		this.dao = dao;
	}

	@Override
	public String loginPro(MemberDTO member, HttpServletRequest req) {
		HttpSession session = req.getSession();
		MemberDTO findUser = dao.loginPro(member);
		if(findUser==null) {
			return "-1";
		}
		else {
			if(findUser.getMemberPasswd().equals(member.getMemberPasswd())) {
				session.setAttribute("loginNick", findUser.getMemberNick());
				return "1";
			}
			else {
				return "0";
			}
		}
	}
}
