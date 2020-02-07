// assumption - every process will have different arrival time

#include<stdio.h>
#include<string.h>

char g[100] = "|";
char g1[100] = "";
int f=0;

struct Process
{
  int id,at,bt,tat,wt,et,eet;     //et = execution start time
  char name[3];                   // eet = execution end time
  int flag;
};

void gantt(int,struct Process p[]);

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

    if(i==0)
       gtime = p[min].at;

    printf("Process %s executed\n",p[min].name);
    p[min].et = gtime;
    p[min].eet = p[min].et + p[min].bt;
    gantt(min,p);
    gtime += p[min].bt;
    p[min].wt = p[min].et - p[min].at;
    p[min].tat = p[min].wt + p[min].bt;
    printf("Waiting time = %d\n",p[min].wt);
    printf("Turnaround time = %d\n",p[min].tat);
    printf("\n");
  }

  printf("\n%s\n",g);
  printf("%s\n",g1);
  printf("\n");

  float awt=0,atat=0;
  for(int k=0;k<n;k++)
  {
    awt += p[k].wt;
    atat += p[k].tat;
  }
  awt = awt/n;
  atat = atat/n;
  printf("\nAverage Waiting Time = %.2f\n",awt);
  printf("Average Turnaround Time = %.2f\n\n",atat);

}

void gantt(int x, struct Process p[])
{

  int val = 4;
  int z = p[x].bt * val;
  int y;

  for(y=1;y<=z;y++)
  {
    if(y==(z/2)+1)
      strcat(g,p[x].name);
    strcat(g,"_");
  }

  strcat(g,"|");

  if(f==0)
  {
    f=1;
    char b[3];
    sprintf(b, "%d", p[x].at);           // integer to string convertion
    strcat(g1,b);
  }
  int nod=0;
  int l=p[x].eet;
  while(l!=0)
  {
    l /= 10;
    nod++;
  }

  z = z - (nod-1);
  int m;
  for(m=1;m<=z+2;m++)
  {
    strcat(g1," ");
  }

  char c[3];
  sprintf(c, "%d", p[x].eet);
  strcat(g1,c);

}
