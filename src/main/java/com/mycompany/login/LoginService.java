package com.mycompany.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.mycompany.dto.MemberDTO;

public interface LoginService {
	public String loginPro(MemberDTO member, HttpServletRequest req);		// Login Process
	public void logoutPro(HttpServletRequest req);							// Logout Process
	public String emailChk(MemberDTO member);								// Email Check
	public void joinPro(MemberDTO member);								// Join Process
}
