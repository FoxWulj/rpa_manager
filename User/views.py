from io import BytesIO

from User.check_code import create_validate_code
from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def login(request):
    if request.method == 'GET':

        return render(request, 'user/login.html')
    else:
        return HttpResponse('hello')


def check_code(request):
    stream = BytesIO()
    # 生成图片 img、数字代码 code，保存在内存中，而不是 Django 项目中

    img, code = create_validate_code()
    img.save(stream, 'PNG')

    # 写入 session
    request.session['verify_code'] = code
    print(code)
    return HttpResponse(stream.getvalue())
    return None