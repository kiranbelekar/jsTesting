var s=10;
var wi;
wi=10;

for (i = 1; i<5; i++) {

  let s=100;
  // Print i to the Output window.
  Debug.write("loop index is " + i);
  // Wait for user to resume.
  debugger;
} 

function runPromise() {
  function copyToClipboard(element) {
    var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(element).select();
      document.execCommand("copy");
      $temp.remove();
}

  return Promise.reject("rejection reason");
}

function foo() {
  try { // Noncompliant, the catch clause of the 'try' will not be executed for the code inside promise
    runPromise();
  } catch (e) {
    console.log("Failed to run promise", e);
  }
}

var j = 10;

//var attribute = new Map<int, int>();
attribute.set("mod", Utility.GetModifiers(node.modifiers));
let id = AddGenericNode1(node, nodeKind, Rel.Child);

if(!identNodeFromMap) {

}

function foo(n, m) {
  switch (n) {
    case 0:
      switch (m) {  // Noncompliant; nested switch
        // ...
      }
    case 1:
      // ...
    default:
      // ...
  }
}

if(identNodeFromMap)
{
    signature = identNodeFromMap.nid.sig;
    uid = identNodeFromMap.nid.uid;
}

for (;;) {  // Noncompliant; end condition omitted
    // ...
  }

  function f(){

    for (j = 0; j < array.length; j++) {  // Noncompliant; j is global now too
      // ...
    }
  }
///////////////////////////////////////////////////////////////////////////////


  localStorage.setItem("login", login); // Noncompliant
  sessionStorage.setItem("sessionId", sessionId); // Noncompliant

  var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 300);
  });
  
  promise1.then(function(value) {
    console.log(value);
    // expected output: "foo"
  });

  
///////////////////////////////////////////////////////////////////
const isMomHappy = true;

const willIGetNewPhone = new Promise(
(resolve, reject) => { // fat arrow
    if (isMomHappy) {
        const phone = {
            brand: 'Samsung',
            color: 'black'
        };
        resolve(phone);
    }
}
);
//////////////////////////////////////////////////////////////////////////
export function getCommitData(url, headerData, repoProvider = '', totalCommits, prID, queryParams, hasPages, serverType) {
  queryParams = (!hasPages) ? queryParams : {};
   return new Promise((resolve, reject) => {
      BatchedBridge.enqueueNativeCall(
      moduleID,
      methodID,
      args,
      data => resolve(data),
      );
      });
}

////////////////////////////////////////////////////////////////////////////////////////////////

export function getCommitData(url, headerData, repoProvider = '', totalCommits, prID, queryParams, hasPages, serverType) {
queryParams = (!hasPages) ? queryParams : {};
return new Promise((resolve, reject) => {
    let payloadCommitsMeta = {
        url,
        headerData,
        repoProvider,
        totalCommits,
        prID,
        queryParams,
        hasPages,
        resolve,
        serverType
    }
    pullRequestInterfaceController.setRepoProviderContext(payloadCommitsMeta.repoProvider, serverType).getCommitsPayload(payloadCommitsMeta);
});
}
//////////////////////////////////////////////////////////////////////////
export function getCommitData(url, headerData, repoProvider = '', totalCommits, prID, queryParams, hasPages, serverType) {
  queryParams = (!hasPages) ? queryParams : {};
   return new Promise((resolve, reject) => {
      BatchedBridge.enqueueNativeCall(
      moduleID,
      methodID,
      args,
      data => resolve(data),
      );
      });
}
