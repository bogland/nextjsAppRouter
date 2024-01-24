'use client';
import React from 'react';

type Props = {
}

class Login {
  login = async (): Promise<ResLogin> => {
    return { accessToken: "" };
  }
  logout = () => {

  }
}

type ResLogin = {
  accessToken: string;
}

class LoginGoogle extends Login {
  id: number;
  email: string;
  constructor(id: number, email: string) {
    super();
    this.id = id;
    this.email = email;
  }
  login = async (): Promise<ResLogin> => {
    alert("구글 로그인");
    return { accessToken: "123" };
  }
}

class LoginFacebook extends Login {
  id: number;
  phone: string;
  constructor(id: number, phone: string) {
    super();
    this.id = id;
    this.phone = phone;
  }
  login = async (): Promise<ResLogin> => {
    alert("페이스북 로그인");
    return { accessToken: "123" };
  }
}

const page = (props: Props) => {
  const login = async (loginObj: Login): Promise<ResLogin> => {
    const resLogin = await loginObj.login();
    return resLogin;
  }
  return (
    <>
      <div className="wrap flex flex-col gap-10">
        <button onClick={async () => {
          const resLogin = await login(new LoginGoogle(1, "abc@abc.com"));
          console.log("resLogin1 : ", resLogin);
        }}>구글</button>
        <button onClick={async () => {
          const resLogin = await login(new LoginFacebook(1, "01012345678"));
          console.log("resLogin2 : ", resLogin);
        }}>페이스북</button>
      </div>
    </>
  );
};

export default page;