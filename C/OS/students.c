#define _POSIX_SOURCE
#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#undef _POSIX_SOURCE
#include <stdio.h>

int main()
{
  char fn[]="student.txt", name[]="", age[]="", gender[]="",branch[]="",roll[]="";
  int fd;

  if ((fd = creat(fn, S_IRUSR | S_IWUSR)) < 0)
    exit(1);
  else
  {
    write(fd,"Name                ",20);
    write(fd,"Age Gender  Branch  Roll no. ",29);
    write(fd,"\n",1);
    write(fd,"\n",1);

    for(int i=0;i<5;i++)
    {
      printf("Enter name = ");
      scanf("%s", &name);
      write(fd, name, strlen(name));
      for(int i=0;i<20-strlen(name);i++)
         write(fd," ",1);
      //lseek(fd,20-strlen(name),SEEK_CUR);

      printf("Enter Age = ");
      scanf("%s", &age);
      write(fd, age, strlen(age));
      for(int i=0;i<4-strlen(age);i++)
         write(fd," ",1);
      //lseek(fd,4-strlen(age),SEEK_CUR);

      printf("Gender = ");
      scanf("%s", &gender);
      write(fd, gender, strlen(gender));
      for(int i=0;i<8-strlen(gender);i++)
         write(fd," ",1);
      //lseek(fd,8-strlen(gender),SEEK_CUR);

      printf("Branch = ");
      scanf("%s", &branch);
      write(fd, branch, strlen(branch));
      for(int i=0;i<8-strlen(branch);i++)
         write(fd," ",1);
      //lseek(fd,8-strlen(branch),SEEK_CUR);

      printf("Roll no. = ");
      scanf("%s", &roll);
      write(fd, roll, strlen(roll));
      for(int i=0;i<10-strlen(roll);i++)
         write(fd," ",1);
      write(fd,"\n",1);
      //lseek(fd,10-strlen(roll),SEEK_CUR);

      printf("\n");
    }

    close(fd);
  }
return 0;
}
