pragma solidity ^0.5.11;

contract Napthter {
  struct Library {
    bytes32 bloom;
    bytes32 hash;
    uint lastUpdatedBlock;
    address owner;
    bool registered;
  }

  Library[] libraries;

  mapping (address => uint) libraryIndexByOwner;

  function registerLibrary(bytes32 hash, bytes32 bloom)
    public
    returns (uint libraryIndex)
  {
    require(
      !isRegistered(msg.sender),
      "Library already registered. Please update your library instead."
    );

    libraries.push(
      Library({
        bloom: bloom,
        hash: hash,
        lastUpdatedBlock: block.number,
        owner: msg.sender,
        registered: true
      })
    );

    libraryIndex = libraries.length - 1;
    libraryIndexByOwner[msg.sender] = libraryIndex;
  }

  function updateLibrary(bytes32 hash, bytes32 bloom) public {
    require(
      isRegistered(msg.sender),
      "Cannot update library that hasn't been registered. Please register first."
    );

    Library storage lib = libraries[libraryIndexByOwner[msg.sender]];
    lib.hash = hash;
    lib.bloom = bloom;
    lib.lastUpdatedBlock = block.number;
  }

  function getLibraryByIndex(uint index)
    public
    view
    returns (bytes32 hash, bytes32 bloom, uint lastUpdatedBlock, address owner)
  {
    Library storage lib = libraries[index];
    require(lib.registered, "Sorry, no library at this index");
    return (lib.hash, lib.bloom, lib.lastUpdatedBlock, lib.owner);
  }

  function getLibraryByOwner(address owner)
    public
    view
    returns (bytes32 hash, bytes32 bloom, uint lastUpdatedBlock, uint index)
  {
    require(isRegistered(owner), "Sorry, this address has not registered a library yet.");
    index = libraryIndexByOwner[owner];
    Library storage lib = libraries[index];
    return (lib.hash, lib.bloom, lib.lastUpdatedBlock, index);
  }

  function isRegistered(address owner) public view returns (bool) {
    return libraries[libraryIndexByOwner[owner]].registered;
  }
}