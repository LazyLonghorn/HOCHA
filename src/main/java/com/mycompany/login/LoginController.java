package com.mycompany.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
	// Login Process
	@RequestMapping(value="/login.do", method=RequestMethod.POST)	
	public @ResponseBody String LoginPro(MemberDTO member, HttpServletRequest req, HttpServletResponse res) {
		System.out.println("==============Login Pro Start==============");
		System.out.println("member : " + member.getMemberId());
		System.out.println("member : " + member.getMemberPasswd());
		String result = service.loginPro(member, req);
		System.out.println("============================================");
		return result;
	}   
	 
	// Logout Process
	@RequestMapping(value="/logout.do", method=RequestMethod.GET)	
	public @ResponseBody void LogoutPro(HttpServletRequest req) {
		service.logoutPro(req);
	} 
	
	// Email Chk Process
	@RequestMapping(value="/joinEmailChk.do", method=RequestMethod.POST)	
	public @ResponseBody String JoinEamilChkPro(MemberDTO member) {
		System.out.println("MemberId : " + member.getMemberId());
		String result = service.emailChk(member);		
		return result;
	} 
	
	// Join Process
	@RequestMapping(value="/join.do", method=RequestMethod.POST)	
	public @ResponseBody String JoinPro(MemberDTO member) {
		System.out.println("==============Join Pro Start==============");
		service.joinPro(member);
		System.out.println("============================================");
		return "1";
	}
		
}
