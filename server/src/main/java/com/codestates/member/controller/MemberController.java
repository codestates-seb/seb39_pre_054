package com.codestates.member.controller;

import com.codestates.member.service.MemberService;
import com.codestates.member.dto.MemberPatchDto;
import com.codestates.member.dto.MemberPostDto;
import com.codestates.member.dto.MemberResponseDto;
import com.codestates.member.entity.Member;
import com.codestates.member.mapper.MemberMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/v1/members")
@Validated
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {

        Member member = memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));
        MemberResponseDto memberResponseDto = mapper.memberToMemberResponseDto(member);

        return new ResponseEntity(memberResponseDto, HttpStatus.CREATED);
    }


    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,@Valid @RequestBody MemberPatchDto memberPatchDto) {

        memberPatchDto.setMemberId(memberId);

        Member member = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto));
        MemberResponseDto memberResponseDto = mapper.memberToMemberResponseDto(member);

        return new ResponseEntity<>(memberResponseDto, HttpStatus.OK);
    }

}