import React, { useEffect } from "react";

export const KakaoLoginContainer = ({ children, appKey, setUser, style }) => {
  const loadCdn = async () => {
    return new Promise((resolve, reject) => {
      const cdn = document.createElement("script");
      cdn.id = "kakao-sdk";
      cdn.src = "//developers.kakao.com/sdk/js/kakao.min.js";
      cdn.onload = resolve;
      document.body.append(cdn);
    });
  };

  useEffect(() => {
    loadCdn();
  }, []);

  const handleKakao = async () => {
    window.Kakao.init(appKey);
    window.Kakao.Auth.login({
      success: function async() {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function async(res) {
            setUser(res);
            return res;
          },
          fail: function (err) {
            setUser(err);
            return err;
          },
        });
      },
      fail: function (err) {
        setUser(err);
        return err;
      },
    });
  };
  return (
    <div style={style} onClick={handleKakao}>
      {children}
    </div>
  );
};
