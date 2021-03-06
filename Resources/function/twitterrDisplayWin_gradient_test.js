var win = Ti.UI.currentWindow;
win.backgroundColor = 'black';

//------------------------------------------------------------- 
//              Infomation about  tweetDisplayWin(B3 image)
//-------------------------------------------------------------
var displayAvatar = win.displayAvatar;
var displayIndex = win.displayIndex;
var displayTitle = win.displayTitle;
var displayText = win.displayText;
var displaycreated_at = win.created_at;

var displayNav = [];
displayNav[0] = win.displayNav;//tweet投稿画面から

var UA_tableViewData = win.UA_tableViewData;
var displayTweet = win.displayTweet;//tweet投稿画面から

var windowTitle = Ti.UI.createLabel({
        text: displayTitle,
        width: '200',
        textAlign: 'center'
    });
                    

    win.setTitleControl(windowTitle);
    
    var rows = [];
    
    var tweetParts = Ti.UI.createTableViewRow({
        height:'auto',
        opacity:1.0
    });
    
    
    var background = Ti.UI.createView({
        backgroundImage:'images/fukidashi1.png',
        
        width:300,
    });    
    tweetParts.add(background);
    
    var displayLabel = Ti.UI.createLabel({
        text: displayText,
        top:7,
        bottom: 42,
        width: 290,
        height:'auto',
        textAlign: 'center',
        font:{fontSize:14}
    });
    tweetParts.add(displayLabel);
    
    var created_atLabel = Ti.UI.createLabel({
        text: displaycreated_at,
        bottom: 31,
        width: 260,
        height:'auto',
        textAlign: 'right',
        font:{fontSize:11}
    });
    tweetParts.add(created_atLabel);
    
    rows.push(tweetParts);
    

    var avatarParts = Ti.UI.createTableViewRow({
        height:'auto',
        opacity:1.0
    });          
    
    var displayAvatar = Ti.UI.createImageView({
        image:displayAvatar,
        //left:160,
        //top:200,
        height:50,
        width:50
    });
    avatarParts.add(displayAvatar);
    rows.push(avatarParts);
    
    
    var tableview = Titanium.UI.createTableView({
        data: rows,
        separatorStyle:0,
        touchEnabled:false,
        //backgroundColor:'#616161',
        /*
        backgroundGradient:{
            type:'linear',
            colors:['black','#CCC'],
            startPoint:{x:0,y:'0%'},
            endPoint:{x:0,y:'100%'}
        },
        */
    backgroundImage:'images/blackGradient@2x.png',
    opacity:0.6
    });
    win.add(tableview);
    
    
    
        displayLabel.addEventListener('click',function(e)
    {
    
        //alert(e.source.text);
        //regular expression : 正規表現
        var q= /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?)/gi;
        var str = e.source.text;
        var result =str.match(q);
        if(result==null){
            regularExpressionUrl=0;
        }else{
            regularExpressionUrl=result;
        }
             
        
        //alert(e.rowData.url[0]);
        if(regularExpressionUrl==0){
            alert('urlがありません');
        
        }else{
            //alert(e.rowData.url[0]);
            var alertDialog = Titanium.UI.createAlertDialog({
                title: '['+regularExpressionUrl[0]+']',
                message: 'このurlにアクセスしますか？',
                buttonNames: ['cancel','OK']
            });
            alertDialog.addEventListener('click',function(event){
                // Cancelボタンが押されたかどうか
                if(event.index == 0){
                    // cancel時の処理
                    //alert('cancel');
                }
                // 選択されたボタンのindexも返る
                if(event.index == 1){
                    // "OK"時の処理
                    //alert('OK');
                    
                    
                    // 単純なURLのロード
                    var win = Titanium.UI.createWindow();


                    var webview = Ti.UI.createWebView();
                    // webviewで表示したサイトのタイトルの取得
                    webview.addEventListener('load',function(e){
                         Ti.API.debug("webview loaded: "+e.url);
                         var title = webview.evalJS('document.title');
                         win.title=title;
                    });
                    
                    webview.url = regularExpressionUrl[0];

                    win.add(webview);
                    
                    //win.open({animated:true});
                    if(displayNav[0]){
                    //alert('yes!!!');
                       displayNav[0].open(win,{animated:true}); 
                       
                    }else{
                    //alert('no!!!');
                        Titanium.UI.currentTab.open(win,{animated:true});
                    }
                }
            });
    alertDialog.show();
        
        }
        
        
    });
    
    
   var UA_TL = Titanium.UI.createButton({
        bottom:0,
        left:0,
        height: 45,
        width: 80,
        backgroundImage:'images/black.png',
    });
    var UA_TLLabel = Ti.UI.createLabel({
        text:'TL',
        width:20,
        height:20,
        bottom:0,
        left:34,
        font:{fontSize:10},
        color:'white',
        
    });
    UA_TL.add(UA_TLLabel);

    var UA_TLImageView = Ti.UI.createImageView({
        url:'images/TL_icon.png',
        height:80,
        width:48,
        
    });
    UA_TL.add(UA_TLImageView);
    
    
    var UA_new = Titanium.UI.createButton({
        bottom:0,
        left: 80,
        height: 45,
        width: 80,
        backgroundImage:'images/black.png',
    });
    var UA_newLabel = Ti.UI.createLabel({
        text:'new',
        width:20,
        height:20,
        bottom:0,
        font:{fontSize:10},
        color:'white',
        
    });
    UA_new.add(UA_newLabel);

    var UA_newImageView = Ti.UI.createImageView({
        url:'images/new_icon.png',
        height:80,
        width:48,
        
    });
    UA_new.add(UA_newImageView);
    
    
    
                        
    
    var UA_old = Titanium.UI.createButton({
        bottom:0,
        left:160,
        height: 45,
        width: 80,
        backgroundImage:'images/black.png',
    });

    var UA_oldLabel = Ti.UI.createLabel({
        text:'old',
        width:20,
        height:20,
        bottom:0,
        left:34,
        font:{fontSize:10},
        color:'white',
        
    });
    UA_old.add(UA_oldLabel);

    var UA_oldImageView = Ti.UI.createImageView({
        url:'images/old_icon.png',
        height:80,
        width:48,
        
    });
    UA_old.add(UA_oldImageView);



    var UA_share = Titanium.UI.createButton({
        bottom:0,
        left:240,
        height: 45,
        width: 80,
        backgroundImage:'images/black.png',
    });

    var UA_shareLabel = Ti.UI.createLabel({
        text:'share',
        width:30,
        height:20,
        bottom:0,
        left:27,
        font:{fontSize:10},
        color:'white',
        
    });
    UA_share.add(UA_shareLabel);

    var UA_shareImageView = Ti.UI.createImageView({
        url:'images/share_icon.png',
        height:80,
        width:48,
        
    });
    UA_share.add(UA_shareImageView);

    
    
    
    
    
    
    
    UA_TL.addEventListener('click', function(e){
                    
        Ti.UI.currentTab.close(win);
                    
    });
                
    UA_new.addEventListener('click', function(e){
                    
        if(displayIndex - 1 >= 0)
        {
            if(displayTweet == true)
            {
            
            displayAvatar.image = UA_tableViewData[displayIndex - 1].getChildren()[0].image;
            displayLabel.text = UA_tableViewData[displayIndex - 1].text;
            created_atLabel.text = UA_tableViewData[displayIndex - 1].getChildren()[3].text;;
            windowTitle.text = UA_tableViewData[displayIndex - 1].user.screen_name;
            
            
            win.setTitleControl(windowTitle);
            displayIndex = displayIndex - 1;
            
            tweetParts.height='auto';
            //Ti.API.log(avatarParts.height);
            Titanium.API.info('aa');
            }
            else
            {
            displayAvatar.image = UA_tableViewData[displayIndex - 1].getChildren()[0].image;
            displayLabel.text = UA_tableViewData[displayIndex - 1].getChildren()[2].text;
            created_atLabel.text = UA_tableViewData[displayIndex - 1].getChildren()[3].text;;
            windowTitle.text = UA_tableViewData[displayIndex - 1].getChildren()[1].text;
            win.setTitleControl(windowTitle);
            displayIndex = displayIndex - 1;
            tweetParts.height='auto';
            //Ti.API.log(avatarParts.height);
            Titanium.API.info('bb');
            }                
            
            
            
                            
        }
                    
    });
                
    UA_old.addEventListener('click', function(e){
    
    
    if(displayTweet == true)
    {
        displayAvatar.image = UA_tableViewData[displayIndex + 1].getChildren()[0].image;
       displayLabel.text = UA_tableViewData[displayIndex + 1].text;
       created_atLabel.text = UA_tableViewData[displayIndex + 1].getChildren()[3].text;;
       windowTitle.text = UA_tableViewData[displayIndex + 1].user.screen_name;
        win.setTitleControl(windowTitle);
        displayIndex = displayIndex + 1;
        tweetParts.height='auto';
        //Ti.API.log(avatarParts.height);
        Titanium.API.info('cc');

    }
    else
    {
        displayAvatar.image = UA_tableViewData[displayIndex + 1].getChildren()[0].image;
        displayLabel.text = UA_tableViewData[displayIndex + 1].getChildren()[2].text;
        windowTitle.text = UA_tableViewData[displayIndex + 1].getChildren()[1].text;
        created_atLabel.text = UA_tableViewData[displayIndex + 1].getChildren()[3].text;;
        win.setTitleControl(windowTitle);
        displayIndex = displayIndex + 1;
        tweetParts.height='auto';
        //Ti.API.log(avatarParts.height);
        Titanium.API.info('dd');
    }

                    


    });
    
    
    UA_old.addEventListener('dblclick', function(e){
        UA_oldImageView.url = 'images/share_icon.png';
    });        
    
    
    win.add(UA_TL);
    win.add(UA_old);
    win.add(UA_new);
    win.add(UA_share);
    
    