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
		MemberDTO findUser = dao.findUser(member);
		if(findUser==null) {
			return "-1";
		}
		else {
			if(findUser.getMemberPasswd().equals(member.getMemberPasswd())) {
				session.setAttribute("loginName", findUser.getMemberName());
				session.setAttribute("loginPfImg", findUser.getMemberPfimg());
				return "1";
			}
			else {
				return "0";
			}
		}
	}
	
	@Override
	public void logoutPro(HttpServletRequest req) {
		// TODO Auto-generated method stub
		HttpSession session = req.getSession();
		session.invalidate();
	}
	
	@Override
	public String emailChk(MemberDTO member) {
		String returnTxt = null;
		try {
			MemberDTO findUser = dao.findUser(member);
			if(member.getMemberId().equals(findUser.getMemberId())) {
				returnTxt = "0";
			}
		}catch(NullPointerException e) {
			returnTxt = "1";
		}	
		return returnTxt;
	}
	
	@Override
	public void joinPro(MemberDTO member) {
		// TODO Auto-generated method stub
		dao.joinPro(member);
	}
	
	
}
