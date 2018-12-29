package com.mycompany.memberInfo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.mycompany.dto.MemberDTO;

@Controller
public class MemberInfoController {
	private MemberInfoService service;
	public void setService(MemberInfoService service) {
		this.service = service; 
	}


	@RequestMapping(value="member/{memberName}", method=RequestMethod.GET)
	public ModelAndView userInfo(@PathVariable("memberName")String memberName) {
		ModelAndView mav = new ModelAndView();
		MemberDTO searchUser = service.searchUser(memberName);
		
		mav.addObject("searchMember", searchUser);
		mav.setViewName("userInfo");
		return mav;
	} 
}
