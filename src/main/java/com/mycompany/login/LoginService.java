package com.mycompany.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.mycompany.dto.MemberDTO;

public interface LoginService {
	public String loginPro(MemberDTO member, HttpServletRequest req);		// Login Process
}
