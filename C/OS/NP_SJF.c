#include<stdio.h>
#include<string.h>

struct Process
{
  int id,at,bt,tat,wt,et;
  char name[3];
  int flag;
};

int main()
{
  int n;
  printf("How many processes you want to create? ");
  scanf("%d",&n);
  printf("\n");

  struct Process p[n];
  struct Process queue[n];

  for(int i=0; i<n; i++)
  {
    p[i].id = i+1;
    p[i].name[0]= 'P';
    p[i].name[1]= (i+1) + '0';
    p[i].name[2]= '\0';
    printf("Process %s -\n",p[i].name);
    printf("Arrival Time = ");
    scanf("%d",&p[i].at);
    printf("Burst Time = ");
    scanf("%d",&p[i].bt);
    p[i].flag=0;

    printf("\n");
  }

  printf("\n-----------Shortest Job First, Non-Preemptive Scheduling------------\n\n");

  int min_at = 0,min_bt,min,min2, gtime=0,m=0;

  min_at = 100;                    // find an alternate
  min=0;
  for(int j=0; j<n; j++)
  {
    if(p[j].at<min_at)
    {
      min=j;
      min_at= p[j].at;
    }
  }
  //got the minimum arrival time
  gtime=min_at;
  int flag2=1;
  while(flag2)
  {
    flag2=0;

    // copy processs to ready queue whose arrival time is less than global time
    for(int k=0; k<n; k++)
    {
      if(p[k].flag==0 && p[k].at <= gtime)
      {
        queue[m]=p[k];
        p[k].flag=1;
        m++;
      }
    }

    min_bt=100;
    for(int l=0; l<m; l++)
    {
      if(queue[l].flag==0 && queue[l].bt<min_bt)
      {
        min_bt=queue[l].bt;
        min2=l;
        flag2=1;
      }
    }

    if(flag2==1)
    {
      printf("Process %s is executed\n",queue[min2].name);
      queue[min2].flag=1;
      p[min2].et = gtime;
      p[min2].wt = p[min2].et - p[min2].at;
      p[min2].tat = p[min2].wt + p[min2].bt;
      printf("Waiting time = %d\n",p[min2].wt);
      printf("Turnaround time = %d\n",p[min2].tat);
      printf("\n");
      gtime += queue[min2].bt;
    }
  }
}
