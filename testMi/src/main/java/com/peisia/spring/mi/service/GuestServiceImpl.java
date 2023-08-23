package com.peisia.spring.mi.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.peisia.spring.mi.mapper.GuestMapper;
import com.peisia.spring.mi.vo.GuestVO;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class GuestServiceImpl implements GuestService{
	@Setter(onMethod_ = @Autowired)
	private GuestMapper mapper;

	@Override
	public Model getList(Model m, int currentPage) {
		int listCountPerPage = 5;
//	public HashMap<String, Object> getList(int currentPage){
//	int PerPage = 5;	
//	HashMap<String, Object> hm = new HashMap<>();
	int limitIndex = (currentPage-1) * listCountPerPage;
	
//	int count = mapper.getCount();
	m.addAttribute("list", mapper.getList(limitIndex));
//	hm.put("count", mapper.getCount());
	
	int count = mapper.getCount();
	m.addAttribute("count", mapper.getCount());
	
	int totalPageCount = 0;
	
	totalPageCount = (int) Math.ceil((double)count / listCountPerPage);
	log.info("========== 게시글 수 :"+count);
	log.info("========== 페이지 수 :"+totalPageCount);
	log.info("비지니스 계층=========");
	
	m.addAttribute("totalPageCount",totalPageCount);
	return m;
	}
	
	
	@Override
	public GuestVO read(long bno) {
		return mapper.read(bno);
	}
	@Override
	public void del(long bno) {
		mapper.del(bno);
	}
	@Override
	public void write(GuestVO gvo) {
		mapper.write(gvo);
	}
	@Override
	public void modify(GuestVO gvo) {
		mapper.modify(gvo);
	}



	



	
}