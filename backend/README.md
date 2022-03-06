# 1. Install DENO


## Install via command

**With Shell (Mac):**

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

**With PowerShell (Windows):**

```powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
<br>

## Install via Package Manager

**With [Homebrew](https://formulae.brew.sh/formula/deno) (Mac):**

```sh
brew install deno
```

**With [Chocolatey](https://chocolatey.org/packages/deno) (Windows):**

```powershell
choco install deno
```

<br><br>

After you installed Deno, run `deno --version` in the console to verify that everything went fine.<br> You should get a similar output:

```shell
$ deno --version
deno 1.18.1 (release, x86_64-pc-windows-msvc)
v8 9.8.177.6
typescript 4.5.2
```


<br><br>


# 2. Run DENO server

Open a console/powershell at the `server.ts` path and run the following command:

```powershell
deno  run --allow-net  [PATH_TO_FILE]\server.ts
```

`--allow-net` flag is necessary because Deno requires you to tell which permissions you want to grant when running the script.

You should get the following output in the console:

```powershell
Check file:///C:.../reactiveForms/backend/server.ts
--- Listening on: http://0.0.0.0:8500 ---
--> You can now navigate to http://localhost:8500/form-config
```
