package com.mycompany.moviesocial;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		return "redirect:/index.do";
	}     
	
	@RequestMapping("/index.do") 
	public String index(Model model) {
		return "index"; 
	}  
	
	// 상세정보 페이지
	@RequestMapping("/view.do")
	public String mainView() {
		return "mainview";
	}
	
	// 상세정보 페이지
	@RequestMapping("/profile.do")
	public String profile() {
		return "profile";
	}
	
	@RequestMapping("/naver.do")
	public String naver() {
		return "naverLogin";
	}
	
}
