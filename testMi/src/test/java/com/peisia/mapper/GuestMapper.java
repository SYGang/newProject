/**
 * 
 */
package com.peisia.mapper;

import java.util.List;

import com.peisia.spring.mi.vo.GuestVO;

/**
 * @author sdedu
 *
 */
public interface GuestMapper {
	public int getCound();
	public List<GuestVO> getList(int limitindex);
	public GuestVO read(long no);
	public void del(long gvo);
	public int write(long gvo);
	public void midify(GuestVO gvo);;
}


