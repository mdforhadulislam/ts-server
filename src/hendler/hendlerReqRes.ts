let hendler: {
  hendlerReqRes: Function;
};

hendler = {
  hendlerReqRes: (req: any, res: any) => {
    if (req.url === "/") {
      res.write("Home Page");
      res.end();
    } else if (req.url === "/about") {
      res.write("About Page");
      res.end();
    } else {
      res.write("404 Page");
      res.end();
    }
  },
};

export default hendler;
