$(function () {
    $('form').validate({
        type_name: {
            rule: {
                required: true
            },
            error: {
                required: '分类名称不能为空'
            },
            success: '输入正确',
            message:'请输入分类名称'
        }
    })
})