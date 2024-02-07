//산업소재 탭
$(document).ready(function () {
    $(".tab").click(function () {
        // 클릭한 탭의 데이터 속성 값 가져오기
        var tabId = $(this).data("tab");

        // 모든 탭과 탭 내용의 활성 클래스 제거
        $(".tab, .tab-content").removeClass("active");

        // 클릭한 탭과 해당 탭 내용에 활성 클래스 추가
        $(this).addClass("active");
        $("#" + tabId).addClass("active");
    });

    // 초기에 첫 번째 탭과 해당 탭 내용에 활성 클래스 추가
    $(".tab:first").addClass("active");
    $(".tab-content:first").addClass("active");
});