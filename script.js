
    function logOut() {
        liff.logout()
        window.location.reload()
      }
  
      async function getFriendship() {
        const friend = await liff.getFriendship()
        document.getElementById("friendship").append(friend.friendFlag)
        if(!friend.friendFlag){
          if(confirm("คุณยังไม่ได้เพิ่ม Message API รบกวนเพิ่ม Message API")){
            window.location = "https://line.me/R/ti/p/@754yztxz"
          }
        }
      }
  
      async function getUserProfile() {
        const profile = await liff.getProfile()
        document.getElementById("userId").append(profile.userId)
        document.getElementById("decodedIDToken").append(liff.getDecodedIDToken().email)
        console.log(profile.userId);
        if(profile.userId == "U1bc5e8b9661c28a9b92eccacc2f93817"){
            alert("member")
        }
        else{
            alert("no member")
        }
      }
  
     
      async function main() {
        await liff.init({ liffId: "1654201326-312kXbD4" })
        document.getElementById("isLoggedIn").append(liff.isLoggedIn())
        if (liff.isLoggedIn()){
          getUserProfile()
          getFriendship()
        } else{
          liff.login()
        }
        // createUniversalLink()
      }
      main()