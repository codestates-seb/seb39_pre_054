package com.codestates.restdocs;

import com.codestates.api.v1.member.controller.MemberController;
import com.codestates.api.v1.member.dto.MemberDto;
import com.codestates.api.v1.member.entity.Member;
import com.codestates.api.v1.member.mapper.MemberMapper;
import com.codestates.api.v1.member.service.MemberService;
import com.codestates.helper.MemberControllerTestHelper;
import com.codestates.helper.StubData;
import com.codestates.member.controller.MemberController;
import com.jayway.jsonpath.JsonPath;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.List;

import static com.codestates.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.codestates.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.requestParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class MemberControllerDocumentationTest implements MemberControllerTestHelper {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MemberService memberService;

    @MockBean
    private MemberMapper mapper;

    @Test
    public void getMembersTest() throws Exception {
        // given
        String page = "1";
        String size = "10";
        String companyType = "005";
        String companyLocation = "001";

        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("companyType", companyType);
        queryParams.add("companyLocation", companyLocation);
        queryParams.add("page", page);
        queryParams.add("size", size);

        Page<Member> members = StubData.MockMember.getMultiResultMember();
        List<MemberDto.Response> responses = StubData.MockMember.getMultiResponseBody();

        // stubbing
        given(memberService.findMembers(Mockito.anyInt(), Mockito.anyInt())).willReturn(members);
        given(mapper.membersToMemberResponses(Mockito.anyList())).willReturn(responses);

        // when
        ResultActions actions = mockMvc.perform(getRequestBuilder(getUrl(), queryParams));

        // then
        MvcResult result = actions
                .andExpect(status().isOk())
                .andDo(
                        document(
                                "get-members",
                                getRequestPreProcessor(),
                                getResponsePreProcessor(),
                                requestParameters(getDefaultRequestParameterDescriptors()),
                                responseFields(getFullPageResponseDescriptors(getDefaultMemberResponseDescriptors(DataResponseType.LIST)))
                        ))
                .andReturn();

        List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.data");
        assertThat(list.size(), Matchers.is(2));
    }
}
