package com.mycompany.login;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mycompany.dto.MemberDTO;

@Controller
public class LoginController {
	private LoginService service;
	public void setService(LoginService service) {
		this.service = service;
	}
	 
	@RequestMapping(value="/login.do", method=RequestMethod.POST)	
	public @ResponseBody String LoginPro(MemberDTO member, HttpServletResponse res) {
		System.out.println("Login Pro Start");
		System.out.println("member : " + member.getMemberId());
		System.out.println("member : " + member.getMemberPasswd());
		
		int result = service.loginPro(member);
		
		return "Success";
	}   
	
	
}
