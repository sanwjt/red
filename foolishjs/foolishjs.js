window.onload=function(){
    var count=1;
    $(".icon-kai").click(function() {
        console.log(count);
        if(count == 1) {
            $(".icon-kai").addClass('icon-kaizhuan');
            // $(".icon-kai").addClass('icon-kaizhuan2');
        }else if(count==2){
            $('.internet-inner').show().addClass('aelrtani');

        }else if(count==3){
            var timer4 =  setTimeout(function () {
                $('.hb-bg').addClass('hb-bgdown');
                $('.hb').removeClass('bounceIn').addClass('demo');
                setTimeout(function () {
                    $(".foolish").show();
                    $('.foolhead').animate({'top':'-17rem'},1500).addClass('foolheadan')
                    $('.huyou-box').addClass('bounceInUp');
                },80);

                clearTimeout(timer4)
            },200)
        }

    });

    $('.icon-kai').on('webkitAnimationEnd',function(){
        $(".icon-kai").removeClass('icon-kaizhuan');

        var timer1 = setTimeout(function(){
            $('.loading-internet').show().addClass('aelrtani');
            clearTimeout(timer1)
        },400)


        var timer = setTimeout(function () {
            $('.loading-internet').removeClass('aelrtani').addClass('aelrtaniout');
            clearTimeout(timer);
            // count++;
        }, 2400);
    })

    var n = 0
    $('.loading-internet').on('webkitAnimationEnd', function () {
        n++;
        if (n == 1) return;

        count++;

    })


    var j = 1;
    $(".btn-confirm").click(function() {

        $('.internet-inner').hide();
        if(j==1){
            var timer1=setTimeout(function () {
                $('.internet-inner').removeClass('aelrtaniout').addClass('aelrtani').show();
                $('.internet-inner p').html('手太慢啦，快点啦！');
                clearTimeout(timer1)
                j++
            },200);
        }else if(j==2){
            var timer2=setTimeout(function () {
                $('.internet-inner').removeClass('aelrtaniout').addClass('aelrtani').show();
                $('.internet-inner p').html('没吃饭吗，快使劲！');
                clearTimeout(timer2)
                j++
            },200);
        }else if(j==3){
            var timer3=setTimeout(function () {
                $('.internet-inner').removeClass('aelrtaniout').addClass('aelrtani').show();
                $('.internet-inner p').html('再用力，再快点<br/>大力出奇迹！');
                clearTimeout(timer3);
                j++;
            },200)
        }else if(j==4){
            $('.internet-inner').removeClass('aelrtani').addClass('bounceOut');
            count++;
            // var timer4 =setTimeout(function(){
            //     alert(1)
            // },200)

        }
    });

    var foolname = '';
    $(".input-box input").on('input',function(){
        var inputLenght=$(this).val();
        if(inputLenght.length == 0){
           $(".input-box p").css({
                'display': 'block',
            }); 
       }else if(inputLenght.length > 0){
            $(".input-box p").css({
                'display': 'none',
            });   
       };
    });


    $('.hy-btn').on('click',function () {
        foolname = $('.input-box input').val();
        if (foolname=='') return;
        var timer1=setTimeout(function () {
            clearTimeout(timer1);
            console.log(1)
            if(foolname!= ""){
                $(".ring-call")[0].play();
                // foolname = $('.input-box input').val();
                $('.foolname').html(foolname);
                var timer2=setTimeout(function () {
                    console.log(2)
                    clearTimeout(timer2)
                    $('.foolish').hide();
                    $('.call').fadeIn();


                    var timer3=setTimeout(function () {
                        console.log(3)
                        clearTimeout(timer3);
                        $(".ring-call")[0].pause();
                        $('.call').hide();
                        $('.share-box').show();
                    },3000)

                },500)



                $('.icon-share').addClass('tada');

            }else{
                $(".input-box p").css({
                    'display': 'block',
                });
            };

        },1000)



        
    });

    //红包关闭
    // $('.close').on('click',function () {
    //     $('.hb').removeClass('bounceIn');

    //     $('.hb').addClass('bounceOut');

    // })
    // $('.close2').on('click',function () {
    //     $('.wrapper').hide();

    // })
    
}
