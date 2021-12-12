class Solution {
public:
    string originalDigits(string s) {
        vector<int>arr(26,0);
        for(char c:s)
            arr[c-'a']++;
        vector<int>v1(10,0);
        v1[6]=arr['x'-'a'];
        v1[0]=arr['z'-'a'];
        v1[4]=arr['u'-'a'];
        v1[8]=arr['g'-'a'];
        v1[2]=arr['w'-'a'];
        v1[5]=arr['f'-'a']-v1[4];
        v1[3]=arr['t'-'a']-v1[2]-v1[8];
        v1[7]=arr['s'-'a']-v1[6];
        v1[1]=arr['o'-'a']-v1[2]-v1[0]-v1[4];
        v1[9]=arr['i'-'a']-v1[5]-v1[6]-v1[8];
         string ans;
                  for(int i=0;i<10;i++)
                  {
                      int j=v1[i];
                      for(;j>0;j--)
                          ans+=to_string(i);
                  }
        return ans ;
    }
};