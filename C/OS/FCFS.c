// assumption - every process will have different arrival time

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

  printf("\n-----------First Come First Serve, Non-Preemptive Scheduling------------\n\n");

  int min_at = 0,min, gtime=0;
  for(int i=0; i<n; i++)
  {
    min_at = 100;                    // find an alternate
    min=0;
    for(int j=0; j<n; j++)
    {
      if(p[j].flag==0 && p[j].at<=min_at)
      {
        min=j;
        min_at= p[j].at;
      }
    }
    p[min].flag=1;
    //printf("min at = %d\n",p[min].at);
    if(i==0)
       gtime = p[min].at;

    printf("Process %s executed\n",p[min].name);
    p[min].et = gtime;
    gtime += p[min].bt;
    p[min].wt = p[min].et - p[min].at;
    p[min].tat = p[min].wt + p[min].bt;
    printf("Waiting time = %d\n",p[min].wt);
    printf("Turnaround time = %d\n",p[min].tat);
    printf("\n");
  }

}
