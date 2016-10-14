Array.remove = function(array, from, to) {
                var rest = array.slice((to || from) + 1 || array.length);
                array.length = from < 0 ? array.length + from : from;
                return array.push.apply(array, rest);
            };
        
            //this variable represents the total number of popups can be displayed according to the viewport width
            var total_popups = 0;
            
            //arrays of popups ids
            var popups = [];
        
            //this is used to close a popup
            function close_popup(id)
            {
                for(var iii = 0; iii < popups.length; iii++)
                {
                    if(id == popups[iii])
                    {
                        Array.remove(popups, iii);
                        
                        document.getElementById(id).style.display = "none";
                        
                        calculate_popups();
                        
                        return;
                    }
                }   
            }
        
            //displays the popups. Displays based on the maximum number of popups that can be displayed on the current viewport width
            function display_popups()
            {
                var right = 220;
                
                var iii = 0;
                for(iii; iii < total_popups; iii++)
                {
                    if(popups[iii] != undefined)
                    {
                        var element = document.getElementById(popups[iii]);
                        element.style.right = right + "px";
                        right = right + 320;
                        element.style.display = "block";
                    }
                }
                
                for(var jjj = iii; jjj < popups.length; jjj++)
                {
                    var element = document.getElementById(popups[jjj]);
                    element.style.display = "none";
                }
            }
            
            //creates markup for a new popup. Adds the id to popups array.
            function register_popup(id, name)
            {
                for(var iii = 0; iii < popups.length; iii++)
                {   
                    //already registered. Bring it to front.
                    if(id == popups[iii])
                    {
                        Array.remove(popups, iii);
                    
                        popups.unshift(id);
                        
                        calculate_popups();
                        
                        
                        return;
                    }
                }               
                
                var element = '<div class="popup-box chat-popup" id="'+ id +'">';
                element = element + '<div class="popup-head">';
                element = element + '<div class="popup-head-left">'+ name +'</div>';
                element = element + '<div class="popup-head-right"><a href="javascript:close_popup(\''+ id +'\');">&#10005;</a></div>';
                
                

                element = element + '<div style="clear: both"></div></div><div class="popup-messages"></div>';
                
                element = element + '<div class="popup-bottom"><form action="" style="display:flex;"><input type="text" style="flex-grow:1" name="msg"><input type="submit" value="Send"></form></div></div>';
                
                document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + element;  
        
                popups.unshift(id);
                        
                calculate_popups();
                
            }
            
            //calculate the total number of popups suitable and then populate the toatal_popups variable.
            function calculate_popups()
            {
                var width = window.innerWidth;
                if(width < 540)
                {
                    total_popups = 0;
                }
                else
                {
                    width = width - 200;
                    //320 is width of a single popup box
                    total_popups = parseInt(width/320);
                }
                
                display_popups();
                
            }

            function display_members()
            {
                var member_ledger = MemberLedger();
                member_ledger.__init__().then(function () {
                    var member_array = member_ledger.get_all_members();
                    console.log(member_array);
                    for (var i = 0; i < member_array.length ; i++) {
                        //document.getElementById("member_list").innerHTML += '<div class="sidebar-name"> <a href="javascript:register_popup(\''+ member_array[i].user_id + ' \',\' ' + member_array[i].nickname + '\');"><span>'+ member_array[i].nickname+'</span></a> </div>';
                        if(member_array[i].is_online)
                        {
document.getElementById("member_list").innerHTML += '<div class="sidebar-name"> <a href="javascript:register_popup(\''+ member_array[i].user_id + ' \',\' ' + member_array[i].nickname + '\');"><span>'+ member_array[i].nickname+'</span></a> Online</div>';
                        }
                        else
                        {
                            document.getElementById("member_list").innerHTML += '<div class="sidebar-name"> <a href="javascript:register_popup(\''+ member_array[i].user_id + ' \',\' ' + member_array[i].nickname + '\');"><span>'+ member_array[i].nickname+'</span></a> Offline </div>';
                        }
                    }
                });
            }
            
            //recalculate when window is loaded and also when window is resized.
            window.addEventListener("resize", calculate_popups);
            window.addEventListener("load", calculate_popups);