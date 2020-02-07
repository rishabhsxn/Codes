#define _POSIX_SOURCE
#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#undef _POSIX_SOURCE
#include <stdio.h>


int main()
{
  //char fn[]="student.txt";

  int fd = open("student.txt", O_RDONLY,0);

  if (fd < 0)
    exit(1);

  else
  {
    int flag =10;
    char buff;
    lseek(fd,49,SEEK_CUR);
    for(int i=0; i<4; i++)
    {
      flag =20;
      while(flag)
      {
        read(fd,&buff,1);
        printf("%c",buff);
        flag--;
      }
      printf("\n");
      lseek(fd,30,SEEK_CUR);
    }



    close(fd);
  }

  return 0;
}
